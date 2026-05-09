def calculate_total_energy(test_cases):
    results = []
    for x, n in test_cases:
        results.append(0 if n % 2 == 0 else x)
    return results

if __name__ == "__main__":
    import sys

    data = sys.stdin.read().strip().split()
    if not data:
        sys.exit(0)
    t = int(data[0])
    vals = list(map(int, data[1:]))
    test_cases = []
    idx = 0
    for _ in range(t):
        x = vals[idx]; n = vals[idx+1]; idx += 2
        test_cases.append((x, n))

    results = calculate_total_energy(test_cases)
    for result in results:
        print(result)
