# Dashing - The simple personal dashboard

## Dashing is a beautiful personal dashboard that can run on anything with a web browser. It's made entirely on HTML, CSS, and JavaScript. It runs on Flask and Python.

#### A fork of this project made by one of my best friends is accessible [here](https://github.com/Dannnington/miniboard). I'd reccomend you check it out if you want a standalone application with other features that Dashing might not include. 

##### ⚠ Dashing is in active development. Expect bugs.

### Screenshots:

![Dashboard](https://i.imgur.com/4swKwmV.png)



### Setup Instructions:
#### ⚠ Warning, you may encounter bugs! Open an issue on the top left hand side if you find any bugs!
- You will need a server to run the dashboard on. This can be run on something even as small as a Raspberry Pi.
- Make sure you have Python3.7 or higher installed.
1. Run `pip3 install flask` to install Flask. If you are on Windows you will need to run `py -m pip install flask`.
2. Download Dashing's code from Github.
3. Unzip the .zip file and run `cd dashing` or whatever the folder that you downloaded is called.
4. Run `python3 server.py` or `py server.py` on windows.
5. If you are running the server on the same machine you want to display Dashing on, open your browser and type `127.0.0.1:5000`. If you are running it on a different machine, find the **private IP address** of the server and type that into your web browser along with `:5000` at the end.
