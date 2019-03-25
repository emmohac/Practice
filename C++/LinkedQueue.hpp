#ifndef LINKEDSTACK_HPP
#define LINKEDSTACK_HPP

#include <iostream>

template<class T>
class LinkedQueue{
public:
    ~LinkedQueue();
    LinkedQueue();
    LinkedQueue(const LinkedQueue<T> &toCopy);

    bool isEmpty() const;
    int  size()    const;
    T&   peek()     const;

    void enqueue(const T &e);
    T    pop();
    void clear();

private:
    class Node{
    public:
        Node() {}    
        Node(const Node &node)       : value(node.value), next(node.next){}
        Node(T v, Node *n = nullptr) : value(v), next(n){}
        Node *getNext() const     {return next;}
        void setNext(Node *n)     {next = n;}
        void setValue(const T &v) {value = v;}
        T getValue()    const     {return value;}
        ~Node() {}
    private:
        T value;
        Node *next = nullptr;
    };

    Node *first = nullptr;
    Node *last = nullptr;  
    int count = 0;  

};

#endif // !LINKEDSTACK