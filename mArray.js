def restructure_array(arr):
    return [list(row) for row in zip(*arr)]
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(restructure_array(arr))