# Angular 19 external Library Watch Bug

This repositories highlights and issue with Angular 19s new build system, where sourcemaps are completely lost after changes to an external library. 

## How to run

### Build the library 


```bash
cd testLibrary;
# initial install needs to be run once 
npm run build 
# Watch for changes
npm run watch 
```

### Build the Application 

> The application has installed the library through file path "../testLibrary/dist/my-test-library
> An entry for myTestLibrary is in the application tsconfig.json file to ensure mapping is correct 
> Run this while the library is also watching

```bash 
cd testApplication 
npm i 
ng serve 
```

### Evaluate the bug 

1. Open up your browser to https://localhost:4200
2. Notice that a breakpoint is hit as should be expected.  TS files can be debugged as source maps seem to be correct. 

![First Breakpoint](./First%20breakpoint.png)

3. Navigate to [myTestLibrary/my-test-library.service](./testLibrary/projects/my-test-library/src/lib/my-test-library.service.ts). 
4. Uncomment out the first debugger comment in the `init` function 
5. Refresh the application.  Notice how the breakpoint is hit, but source mapping no longer works. 

![Second Breakpoint](./SEcond%20breakpoint.png)

6. Uncomment the other commented lines in the `init` function 
7. Refresh the application.  Notice how the new breakpoint is hit and the new `console.log` appears, but source maps no longer are working. 

![Third Breakpoint](./Third%20breakpoint.png)
