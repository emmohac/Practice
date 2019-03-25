#include "arraySupport.hpp"

namespace gethelp {
    std::vector<std::string> split(const std::string &s){
        std::string temp = s;
        std::stringstream ss(temp);
        std::string buffer;
        std::vector<std::string> toReturn;
        while (ss >> buffer)
            toReturn.push_back(buffer);
        return toReturn;
    }

    void sortReverse(std::vector<int> &v, bool reverse = false){
        if (!reverse)
            std::sort(v.begin(), v.end());
        else
        {
            std::sort(v.begin(), v.end());
            std::stack<int> s;
            for (const int i : v)
                s.push(i);

            int i = 0;
            while (!s.empty()){
                v[i++] = s.top();
                s.pop();
            }
        }
    }

    void rotateLeft(std::vector<int> &v, int time = 1){
        if (v.size() != 1)
            if (v.size() % 2 == 0)
                std::rotate(v.begin(),v.begin()+time,v.end());
            else
                std::rotate(v.begin(),v.begin()+time+1,v.end());
    }

    int KadaneAlgorithm(const std::vector<int>& nums) {
        if (nums.empty())
            return 0;
        if (nums.size() == 1)
            return nums[0];
        
        int total = nums[0];
        int tempTotal = nums[0];
        
        for (int i = 1; i < nums.size(); ++i){
            tempTotal = std::max(nums[i], tempTotal + nums[i]);
            total = std::max(total, tempTotal);
        }
        
        return total;
    }

    bool hasDuplicate(const std::vector<int> &v){
        std::unordered_set<int> s;
        for (const int i : v)
            if (s.find(i) == s.end())
                s.insert(i);
            else
                return true;
        return false;
    }

    std::vector<int> WhatAreMyDuplicates(const std::vector<int> &v){
        std::unordered_map<int,int> toCount;
        for (const int i : v)
            toCount[i] += 1;
        
        std::vector<int> returnMe;
        for (const auto &kv : toCount)
            if (kv.second > 1)
                returnMe.push_back(kv.first);
                
        return returnMe;
    }


}