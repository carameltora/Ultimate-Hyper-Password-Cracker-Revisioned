import itertools
import string
import os
import time
import random
import math

def slowtype(x):
    for i in x:
        print(i, end = "", flush = True)
        time.sleep(0.03)
    print()

def Print(x):
    print(x)

# Convert "01110011 01110100 01101111 01110000 00100000 01100011 01101111 01101110 01110110 01100101 01110010 01110100 01101001 01101110 01100111 00100000 01110100 01101000 01100101 00100000 01110100 01100101 01111000 01110100" To Text, btw That Is Binary 

style = slowtype
tries = 0
lookfor = []

def crack(passw, letters, invis):
    global tries
    
    print("Cracking..")

    chars = letters
    start = time.time()

    for i in range(9):

        for letter in itertools.product(chars, repeat = i):

            letter = "".join(letter)

            tries += 1

            if invis == False:
                print(letter, flush = True)

            if letter == passw:
                end = time.time()
                style("\nCracked\n")
                if Round == True:
                    style("Time: {} Seconds".format(f"{math.ceil(end - start):,}"))
                    style("Tries: {}".format(f"{tries:,}"))
                    style("Speed: {} Tries Per Second".format(f"{math.ceil(tries / (end - start)):,}"))
                else:
                    style("Time: {} Seconds".format(f"{end - start:,}"))
                    style("Tries: {}".format(f"{tries:,}"))
                    style("Speed: {} Tries Per Second".format(f"{tries / (end - start):,}"))

                quit()

uppercase = False
lowercase = False
symbols = False
nums = False
space = False
Round = False

def main():
    global uppercase, lowercase, symbols, nums, lookfor, space, Round, style

    lookfor.clear()

    if uppercase == True:
        lookfor.append(string.ascii_uppercase)

    if lowercase == True:
        lookfor.append(string.ascii_lowercase)

    if symbols == True:
        lookfor.append(string.punctuation)
    
    if nums == True:
        lookfor.append(string.digits)

    if space == True:
        lookfor.append(" ")

    if len(lookfor) == 0:
        lookfor.append(string.ascii_letters + string.digits + string.punctuation + " ")
    
    lookfor = list("".join(lookfor))

    os.system('clear')

    style("1: Settings")
    style("2: Generate Password")
    style("3: Brute Force Calculator")
    style("4: Crack Password\n")
    
    q = input("Option: ")

    if q == "1":
        os.system('clear')
        style("1: Settings")
        style("2: Go Back")

        s = input()

        if s == "1":
            os.system('clear')

            style("Settings Automatically Change To 'y' If All The Below Are 'n'\n")

            up = input("\n(y or n) Look For Uppercase? ")
            if up == "y":
                uppercase = True
            else:
                uppercase = False

            low = input("(y or n) Look For Lowercase? ")
            if low == "y":
                lowercase = True
            else:
                lowercase = False

            sym = input("(y or n) Look For Symbols? ")
            if sym == "y":
                symbols = True
            else:
                symbols = False

            num = input("(y or n) Look For Numbers? ")
            if num == "y":
                nums = True
            else:
                nums = False

            white = input("(y or n) Look For Spaces? ")
            if white == "y":
                space = True
            else:
                space = False

            result = input("(y or n) Round Results? ")
            if result == "y":
                Round = True
            else:
                Round = False

            s = input("(y or n) Slow Print? ")
            if s == "y":
                style = slowtype
            else:
                style = Print

            main()

        if s == "2":
            main()

        else:
            main()

    if q == "2":
        length = int(input("Length: "))
        g = []
        for i in range(length):
            g.append(random.choice(lookfor))
        style("\n⬇ Generated Password ⬇\n")
        for o in "".join(g):
            print(o, end = "", flush = True)
        print()
        style("\n(Based On Settings)\n")
        input("[ENTER] ")
        main()

    if q == "3":
        length = int(input("How Long Is The Password?: "))
        print()
        num = int(len(lookfor) ** length)
        style("\n\nIn The Worst Case Scenario, It Would Take (Shown Above) Tries For That Password\n".format(print(f"{num:,}", end = "", flush = True)))
        print("(Based On Settings)")
        input("\n[ENTER] ")
        main()

    if q == "4":
        word = input("Password: ")
        op = input("(y or n) Would You Like To See The Computer Solve (Takes Longer): ")

        for i in word:
            if i not in lookfor:
                style("Password Irrelevent To Settings!")
                quit()

        if op == "y":
            invis = False

        else:
            invis = True

        if word != "":
            crack(word, lookfor, invis)

        else:
            style("No Password!")
            quit()

    if q == "hyperscipter is the best":
        style("You're Not Wrong")
        quit()

    else:
        main()

main()

# What are you doing down here?
