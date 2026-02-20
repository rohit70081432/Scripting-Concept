#include <iostream>
using namespace std;

int main() {
    int r, c;
    int a[10][10], b[10][10];
    int sum[10][10], diff[10][10];

    cout << "Enter number of rows and columns: ";
    cin >> r >> c;

    cout << "Enter elements of first matrix:\n";
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> a[i][j];
        }
    }

    cout << "Enter elements of second matrix:\n";
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> b[i][j];
        }
    }
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            sum[i][j] = a[i][j] + b[i][j];
            diff[i][j] = a[i][j] - b[i][j];
        }
    }
    cout << "\nMatrix Addition:\n";
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cout << sum[i][j] << " ";
        }
        cout << endl;
    }
    cout << "\nMatrix Subtraction:\n";
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cout << diff[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
