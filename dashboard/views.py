<<<<<<< HEAD
from django.shortcuts import render
from django.http import JsonResponse
import psutil, os


# Create your views here.
# def index(resp):
#     return render(resp, "dashboard/dash.html", {})
def index(resp):
    context = gatherSystemInformation()
    return render(resp, 'dashboard/dash.html', context)

def data(resp):
    json_resp = gatherSystemInformation()
    return JsonResponse(json_resp)

def gatherSystemInformation():
    cpu_percent = psutil.cpu_percent()
    # cpu_time = psutil.cpu_times()
    disk = psutil.disk_usage(os.getcwd())
    memory = psutil.virtual_memory()
    memory_total = round(memory.total/1073741824,1)
    memory_used = round(memory.used/1073741824,1)
    memory_free = round(memory.free/1073741824,1)
    memory_percent = memory.percent
    disk_usage = round(disk.used/1073741824,1)
    disk_free = round(disk.free/1073741824,1)


    drives = [ chr(x) + ":" for x in range(65,91) if os.path.exists(chr(x) + ":") ]
    drives_usage = []
    for drive in drives:
        drive_info = psutil.disk_usage(drive)
        drives_usage.append({ 'name': drive, 'total': round(drive_info.total/1073741824,1), 'free': round(drive_info.free/1073741824,1)})

    processes = []
    for proc in psutil.process_iter(['pid']):
        p = psutil.Process(pid=proc.pid)
        processes.append(p.as_dict(attrs=['pid', 'name', 'username', 'cpu_percent', 'memory_percent']))
    top_processes = sorted(processes, key=lambda i: i['memory_percent'], reverse=True)[:5]


    json_resp = {
        'cpu_percent': cpu_percent,
        # 'cpu_time' : cpu_time,
        'memory': memory_total,
        'memory_used': memory_used,
        'memory_free': memory_free,
        'memory_percent': memory_percent,
        'disk_usage' : disk_usage,
        'disk_free' : disk_free,
        'drives_usage': drives_usage,
        'top_processes': top_processes
    }
    return json_resp
=======
Accepted Merge
>>>>>>> alicia
