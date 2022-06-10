# sequence = [4, 3, 5, 0, 1]
# swaps = 0

def bubblesort(sequence):
    swapped = False
    # Looping from size of array from last index[-1] to index [0]
    for k in range(len(sequence)-1, 0, -1):
        for j in range(k):
            if sequence[j] > sequence[j + 1]:
                swapped = True
                # swapping data if the element is less than next element in the array
                sequence[j], sequence[j + 1] = sequence[j + 1], sequence[j]
                print(sequence)	
            if not swapped:
                print(sequence)
                # exiting the function if we didn't make a single swap
                # meaning that the array is already sorted.
                return

sequence = [39, 12, 18, 85, 72, 10, 2, 18]

# print("Unsorted list is,")
# print(sequence)
print(bubblesort(sequence))
# print("Sorted Array is, ")
# print(sequence)


# print(f"Final result: {result}")
# print(f"Swaps: {swaps}")
