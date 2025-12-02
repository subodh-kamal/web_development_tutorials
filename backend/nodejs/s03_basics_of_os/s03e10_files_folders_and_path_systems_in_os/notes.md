### Path can be represented in two ways:
1. Absolute path -> long path
2. Relative path -> Relevant short path

### Linux files and folders representation:
- if starts with - , then its a file
- if starts with d , then its a directory
- if starts with l , then its a symbolic link

- Windows OS path is separated by backward slash ( \ ). and \n means go to the next line that's why we need to provide \\ backward slash if using this path system.
- Linux/Mac OS path is separated by forward slash ( / ).

### To get the path in the terminal, run this command:
1. To get Windows path: run -> cygpath -w "unix/linux path" -> this command will generate Windows path relevant to Unix/Linux path
2. To get Unix/Linux path: run -> cygpath -u "Windows path" -> this command will generate Unix/Linux path relevant to Windows path

- ~ -> This represents home folder.
- / -> This represents root folder.