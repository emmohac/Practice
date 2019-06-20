#include "LinkedQueue.hpp"
#include <stdexcept>

template<class T>
LinkedQueue<T>::LinkedQueue(){
    first = nullptr;
    last = nullptr;
    count = 0;
}

template<class T>
LinkedQueue<T>::~LinkedQueue(){}

template<class T>
LinkedQueue<T>::LinkedQueue(const LinkedQueue<T> &toCopy){
    if (toCopy.first == nullptr){
        first = last = nullptr;
        count = 0;
    }
    else{
        Node *current = toCopy.first;
        while (current != nullptr){
            enqueue(current->getValue());
            current = current->getNext();
        }
    }
}

template<class T>
bool LinkedQueue<T>::isEmpty() const {
    return count == 0;
}

template<class T>
int LinkedQueue<T>::size() const {
    return count;
}

template<class T>
T& LinkedQueue<T>::peek() const {
    if (count == 0)
        throw ("empty queue");
    return first->getValue();
}

template<class T>
T& LinkedQueue<T>::back() const {
    if (last == nullptr)
        throw ("empty queue");
    return last->getValue();
}
template<class T>
void LinkedQueue<T>::enqueue(const T &e){
    if (first == nullptr)
        first = last = new Node(e);
    else
    {
        last->setNext(new Node(e));
        last = last->getNext();
    }
    ++count;
}

template<class T>
T LinkedQueue<T>::pop(){
    if (first == nullptr)
        throw std::runtime_error("empty queue");
    Node *toDelete = first;
    T toReturn = first->getValue();
    if (first == last){
        delete toDelete;
        toDelete = nullptr;
        last = first = nullptr;
    }
    else{
        delete toDelete;
        toDelete = nullptr;
        first = first->getNext();
    }
    --count;
    return toReturn;
}

template<class T>
void LinkedQueue<T>::clear(){
    while (first != nullptr){
        Node *toDelete = first;
        first = first->getNext();
        delete toDelete;
        toDelete = nullptr;
    }
    last = first = nullptr;
    count = 0;
}
