#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>


void removeAll(char *filePath) {
	if (remove(filePath) == 0)
		return;
	else{
		char ls[4] = "ls ";
		FILE *fptr;
		char path[4096];
		strcat(ls, filePath);
		fptr = popen(ls, "r");
		while (fgets(path, 100, fptr) != NULL){
			printf("Path is: %s", path);
			printf("filePath is: %s\n", filePath);
			int lenDir = strlen(filePath);
			int lenPath = strlen(path);
			char file[lenDir + lenPath - 1];
			strcat(filePath, "/");
			printf("filePath now is: %s\n", filePath);
			memcpy(file, filePath, lenDir);
			strcat(file, "/");
			memcpy(file + lenDir+1, path, lenPath - 1);
			printf("File is: %s\n",file);
			removeAll(file);
		}
		//fclose(fptr);
		rmdir(filePath);
	}
}
int main(){
	FILE *fptr;
	char path[4096];
	fptr = popen("ls ./.cTrash", "r");
	while (fgets(path, 100, fptr) != NULL){
		char dir[11] = "./.cTrash/";
		int lenPath = strlen(path);
		int lenDir = strlen(dir);
		char file[lenDir + lenPath - 1];
		memcpy(file, dir, lenDir);
		memcpy(file + lenDir, path, lenPath - 1);
		removeAll(file);
	}
	fclose(fptr);	
	
	return 0;
}
