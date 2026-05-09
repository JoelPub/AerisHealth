
def calculate_min_max_crafts(test_cases):
    results = []
    for n in test_cases:
        if n % 2 != 0 or n < 4:
            results.append(-1)
            continue

        m = n // 2

        b = m // 3
        if m % 3 == 1:
            b -= 1
        if b < 0:
            results.append(-1)
            continue
        a = (m - 3 * b) // 2
        min_crafts = a + b

        max_crafts = m // 2

        results.append((min_crafts, max_crafts))

    return results

if __name__ == "__main__":
    import sys

    data = sys.stdin.read().strip().split()
    if not data:
        sys.exit(0)
    t = int(data[0])
    vals = list(map(int, data[1:]))
    test_cases = vals[:t]

    results = calculate_min_max_crafts(test_cases)
    for result in results:
        if result == -1:
            print(-1)
        else:
            print(result[0], result[1])
