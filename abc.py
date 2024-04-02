lst=[1,2,2,3,4,5]


for i in range(len(lst)):
    # if( i+1 < len(lst)  and lst[i+1] == 2 ):
    #     lst.remove(lst[i+1])
    if(lst[i]==2):
        lst.remove(lst[i])
print(lst)