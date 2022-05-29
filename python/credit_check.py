def credit_check(string):
    doubled_num = []
    added_doubles = []
    str_list = list(string)
    final_check = 0
    for i in range(0, len(str_list), 1):
        if i % 2 == 0:
            doubled_num.append(str(int(str_list[i])*2))
        else: doubled_num.append(str(str_list[i]))
    for j in range(0, len(doubled_num), 1):
        if len(doubled_num[j]) == 2:
            added_doubles.append((int(doubled_num[j][0])) + (int(doubled_num[j][1])))
        else: added_doubles.append(int(doubled_num[j]))
    for k in added_doubles:
        final_check += k
    if final_check % 10 == 0:
        return "The number is valid!"
    else: return "The number is invalid!"
