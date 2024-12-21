#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid;
    
    int a = 10;
    int b = 20;
    int c;
    int id = getpid();  // Process ID of the main process
    printf("Parent Process ID: %d\n", id);

    pid = fork();       // Fork the process
    
    if (pid < 0) {
        printf("Fork Failure!!..\n");
    }
    else if (pid == 0) { // Child process
        int Cid = getpid();  // Process ID of the child process
        printf("Child Process ID: %d\n", Cid);

        a = 30;
        c = a + b;
        printf("Child Calculation (a + b): %d\n", c);
    }
    else { // Parent process
        wait(NULL);     // Wait for the child process to finish
        c = a - b;
        printf("Parent Calculation (a - b): %d\n", c);
    }

    printf("Hello\n");
    return 0;
}