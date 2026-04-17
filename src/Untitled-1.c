#include <stdio.h>

void swap_ints(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void sort(int *arr, int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            /* pointer arithmetic used below */
            if (*(arr + j) > *(arr + j + 1)) {
                swap_ints(arr + j, arr + j + 1);
            }
        }
    }
}

int main() {
    int arr[8] = {9, 3, 7, 1, 8, 2, 6, 4};

    printf("Before sorting:\n");
    for (int i = 0; i < 8; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    sort(arr, 8);

    printf("After sorting:\n");
    for (int i = 0; i < 8; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}