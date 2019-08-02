#ifndef ARRAYSUPPORT_HPP
#define ARRAYSUPPORT_HPP

#include <vector>
#include <iostream>
#include <sstream>
#include <cstdlib>
#include <algorithm>
#include <stack>
#include <unordered_set>
#include <unordered_map>

namespace gethelp {
    std::vector<std::string> split(const std::string &s);

    void sortReverse(std::vector<int> &v, bool reverse = false);

    void rotateLeft(std::vector<int> &v, int time = 1);

    int KadaneAlgorithm(const std::vector<int>& nums);

    bool hasDuplicate(const std::vector<int> &v);

    std::vector<int> WhatAreMyDuplicates(const std::vector<int> &v);

    int indexOfPeak(const std::vector<int> &v);

    int missingElement(const std::vector<int> &v);

    std::vector<int> allMissingNumber(const std::vector<int> &v);

    int majoriElement(const std::vector<int> &v);
}


#endif // !ARRAYSUPPORT_HPP
