#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <sys/types.h>

/*
 * This program will undo the file or directory that was safe removed by moving the file or directory
 * from hidden trash directory to current working directory.
 *
 * The program first check if the user passes enough argument to proceed. It also checks if there are
 * no file or directory has been safe removed, the program will print out an error statement.
 *
 */
int main(int argc, char *argv[]){
	FILE *fptr;
	fptr = fopen("./.cTrash", "r");

	if (argc < 2)
		printf("unrm:: too few argument\n");
	else if (fptr == NULL)
		printf("unrm:: no file was safe removed\n");
	else{
		int i;
		for (i = 1; i < argc; ++i){
			char trash[12] = "./.cTrash/";
			char dirname[3] = "./";
			int fileLen = strlen(argv[i]);
			char file[fileLen];

			strcpy(file, argv[i]);
			strcat(trash, file);

			if (fopen(trash, "r") == NULL)
				printf("File %s does not exist. Moving on.\n", file);
			else{
				strcat(dirname, file);
				rename(trash, dirname);
			}
		}
	}
	fclose(fptr);
	return 0;
}
