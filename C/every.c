#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void print(const int N, const int M, FILE *fptr){
	char line[128];
	int localM = 0;
	int localN = 0;
	
	if (fptr == NULL){
		printf("Failed to open file.\n");
		return;
	}

	while (fgets(line, sizeof line, fptr) != NULL){
		if (localM < M)
			printf("%s", line);
		++localM;
		++localN;

		if (localN == N){
			localM = 0;
			localN = 0;
		} 
	}
	fclose(fptr);
}

int main(int argc, char *argv[]){
	const int DEFAULT_M = 1;
	const int DEFAULT_N = 1;
	int i;
	char *firstARG = argv[1];
	char *firstPart = strtok(firstARG, ",");
	char *secondPart = strtok(NULL, "-");
	
	int n = atoi(firstPart);
	n *= -1;

	if (firstPart[0] != '-'){
		char *env = getenv("EVERY");
		if (env == NULL){
			printf("Received no option and cannot find EVERY. Using default N = 1 and M = 1. \n");
			for (i = 1; i < argc; ++i){
				printf("Content of file: %s\n", argv[i]);
				print(DEFAULT_N, DEFAULT_M, fopen(argv[i], "r"));
			}	
		}
		else {
			printf("Received no option but found EVERY. Using N and M from EVERY.");
			char *firstEveryARG = env;
			char *firstPartEvery = strtok(firstEveryARG, ",");
			char *secondPartEvery = strtok(NULL, "-");

			int everyN = atoi(firstPartEvery);
			everyN *= -1;
			int everyM = atoi(secondPartEvery);

			for (i = 1; i < argc; ++i){
				printf("Content of file %s\n", argv[i]);
				print(everyN, everyM, fopen(argv[i], "r");
			}
		}
		
	}
	else if (firstPart[0] == '-' && secondPart == NULL){
		printf("Only received N = %d. Using default M = 1.\n", n);	
		for (i = 2; i < argc; ++i){
			printf("Content of file: %s\n", argv[i]);
			print(n, DEFAULT_M, fopen(argv[i], "r"));
		}
	}
	else {
		int m = atoi(secondPart);
		printf("Received N = %d and M = %d\n", n, m);
		for (i = 2; i < argc; ++i){
			printf("Content of file: %s\n", argv[i]);
			print(n, m, fopen(argv[i], "r"));
		}
	}
	free(firstARG);
	free(firstPart);
	free(secondPart);
	return 0;
}
