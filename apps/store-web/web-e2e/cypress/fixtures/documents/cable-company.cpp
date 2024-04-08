#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin >> n;
    int arr[n][n] ={0};
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            int x;
            cin >> x;
            arr[i][j] = x;
            arr[j][i] = x;
        }
    }
    vector<int> best(n,INT_MAX);
    vector<bool> inside(n,false);
    int ans = 0;
    best[0] = 0;

    for(int i=0;i<n;i++){
        int minn = INT_MAX;
        int best_node = 0;
        for(int j=0;j<n;j++){
            if(!inside[j] && minn > best[j]){
                minn = best[j];
                best_node = j;
            }
        }
        if(minn >= 0){
            ans += minn;
        }
        inside[best_node] = true;
        for(int j=0;j<n;j++){
            if(!inside[j]){
                best[j] = min(best[j],arr[best_node][j]);
            }
        }
    }
    cout << ans;
    // cout << "\n";
    // for(int i=0;i<n;i++){
    //     for(int j=0;j<n;j++){
    //         cout << arr[i][j]<<" ";
    //     }
    //     cout << "\n";
    // }
}