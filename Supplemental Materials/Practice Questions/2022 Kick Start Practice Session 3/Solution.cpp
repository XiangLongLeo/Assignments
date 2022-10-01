// Coding Practice with Kick Start Session #3 - Kick Start 2022
#include <iostream>
#include <cstdlib>
#include <vector>
#include <algorithm>
using namespace std;
int main()
{
	int T;
	cin >> T;
	for (int x = 0; x < T; x++)
	{
		int N;
		cin >> N;
		vector<int> V(N);
		for (int i = 0; i < N; i++)
			cin >> V[i];
		int count = 0, currMax = 0;
		for (int i = 0; i < N; i++)
		{
			bool prev = (i == 0) || (V[i] > currMax);
			bool next = (i == N - 1) || V[i] > V[i + 1];
			if (prev && next)
				count++;
			currMax = V[i] > currMax ? V[i] : currMax;
		}
		cout << "Case #" << x + 1 << ": " << count << endl;
	}
}
// Original link: https://codingcompetitions.withgoogle.com/kickstart/round/00000000008f49d7/0000000000bcf2ed