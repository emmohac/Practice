#!/bin/bash

if [[ "$#" -eq 0 || "$#" -eq 1 ]]; then
	echo "rename: too few argument"
	exit 1;
fi

if [ "$1" == "-f" ]; then
	sed_command=s$2
	for i in "$@"
	do	
		if [[ "$i" != "-f" && "$i" != "$2" ]]; then
			mv $i $(echo $i | sed -e $sed_command) 
		fi
		
	done
else
    echo "rename will not overwrite existing file with same name. Use -f to overwrite"
	sed_command=s$1
	for i in "$@"
	do
		if [ "$i" != "$1" ]; then
			mv -n $i $(echo $i | sed -e $sed_command)
		fi
	done
fi
	
