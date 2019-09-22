#include <vector>
#include <iostream>
#include <sstream>
#include <cstdlib>
#include <algorithm>
#include <stack>
#include <unordered_set>
#include <unordered_map>

namespace leetcode {
    std::vector<int> sortByParity(std::vector<int> &v){
        // Time Complexity : O(N)
        // Space Complexity : O(N)
        std::vector<int> toReturn;

        toReturn.reserve(v.size());

        // Adding even number
        for (const int i : v)
            if (i % 2 == 0)
                toReturn.push_back(i);

        // Adding odd number
        for (const int i : v)
            if (i % 2 != 0)
                toReturn.push_back(i);
        
        return toReturn;
    }

    std::vector<int> findDuplicates(std::vector<int> &v){
        // Time Complexity : O(N)
        // Space Complexity: O(N)

        // Counting duplicate value
        std::unordered_map<int,int> occurence;
        for (const int i : v)
            occurence[i] += 1;
        
        std::vector<int> toReturn;
        toReturn.reserve(v.size());
        
        for (const auto &kv : occurence)
            if (kv.second > 1)
                toReturn.push_back(kv.first);
        
        return toReturn;
    }

    std::vector<int> firstAndLast(std::vector<int> &nums, int target){
        // Time Complexity : O(N)
        // Space Complexity : O(1)

        std::vector<int> toReturn;
        toReturn.reserve(2); // Only return the first and last index
        const int len = nums.size();

        for (int i = 0; i < len; ++i)
            if (nums[i] == target){ // Found first position
                toReturn.push_back(i);
                break;
            }

        for (int i = len; i >= 0; --i)
            if (nums[i-1] == target){ // Found last position
                toReturn.push_back(i);
                break;
            }
        return toReturn;
    }

    int missingNumber(std::vector<int> &nums){
        // Time Complexity: O(N)
        // Space Complexity: O(1)

        const int len = nums.size();
        const int trueSum = len * (len + 1) / 2; // Finding the actual sum based on the length of array 
                                                // since element range from 0,1,2,3...length-1
        int actualSum = 0;

        for (const int num : nums)
            actualSum += num;
        return trueSum - actualSum;
    }

    std::vector<int> majorityElement(std::vector<int> &nums){
        // Time Complexity : O(N)
        // Space Complexity : O(1)

        std::unordered_map<int,int> occurence;
        const int len = nums.size();
        const int floorLen = floor(len/3);
        occurence.reserve(len);

        // Counting how many times each element appears in the array
        for (const int i : nums)
            occurence[i] += 1;
        
        std::vector<int> toReturn;
        for (const auto &kv : occurence)
            if (kv.second > floorLen) 
                toReturn.push_back(kv.first);
        return toReturn;
    }

    std::vector<int> allMissingElement(std::vector<int> &nums){
        // Time Complexity : O(N)
        // Space Complexity: O(N)

        std::unordered_set<int> originalArray;
        for (const int i : nums) // Help finding becomes O(1) in time
            originalArray.insert(i);

        const int len = nums.size();        

        std::vector<int> toReturn;
        toReturn.reserve(len/2); // Maximum is half of the array is missing

        for (int i = 0; i < len; ++i)
            if (originalArray.find(i) == originalArray.cend()) // Unable to find the correct value
                toReturn.push_back(i);
        
        return toReturn;
    }
}