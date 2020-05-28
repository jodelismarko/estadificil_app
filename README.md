# Oney SelfCare
## Development dependencies
### 1. Ensure Developer Mode is turned ON in Windows Settings App. 
> Settings > Update & Security > For developers > Select **"Developer Mode"**

### 2. Install [Visual Studio 2019][VS] with the following options:
- Workloads
    - **Desktop development with C++**
    - **Universal Windows Platform development:** 
        (Enable the following options on the right panel)
        - **C++ (v141) Universal Windows Platform tools**
        - **USB Device Connectivity**


- Individual Components
    -  **MSVC v141 - VS 2017 C++ x64/x86 build tools (v14.16)**
    -  **MSVC v141 - VS 2017 C++ ARM build tools (v14.16)**

### 3. Install [NodeJS 12.9.1][NODE]
> If you need more than one version of NodeJS installed you can use [NVM][NVM] to handle it.*

*Be sure you select the version **12.9.1** when working on this project:
```ps
> nvm use 12.19.1
```

### 4. Install the project & Run

Install dependencies:
```ps
> npm run install-fix
````
or
```ps
> npm install
> npm run fix-modules
````

Run UWP
```ps
> npx react-native run-windows
````
or
```ps
> npm run windows
````

Create a new component:
```ps
> npm run nc <componentName>
````
> This creates a component folder with templates files **index.js** and **styles.js** under **src/components/<componentName>**



-----


License
-----

PRIVATE



 [VS]: <https://visualstudio.microsoft.com>
 [NODE]: <https://nodejs.org/download/release/v12.9.1>
 [NVM]: <https://github.com/coreybutler/nvm-windows/releases>
