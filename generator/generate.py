from itertools import permutations
import datetime
import random

# get vocab list and convert it into an array
vocab_file = open("vocabulary.txt", "r") 
vocab_data = vocab_file.read() 
vocab_data_as_list = vocab_data.split("\n") 
vocab_file.close()

# generate a list of permutations
permutations_list = [list(p) for p in permutations(vocab_data_as_list, 3)]

usable_permutations_list = []

start = datetime.datetime.strptime("1900-01-01", "%Y-%m-%d")
end = datetime.datetime.strptime("2100-1-31", "%Y-%m-%d")

date_generated = [start + datetime.timedelta(days=x) for x in range(0, (end-start).days)]

for permutation_index in range(0,len(permutations_list)):
    instance = ".".join(permutations_list[permutation_index])
    usable_permutations_list.append(instance)

dict = {}

output_file = open("output.json", "w")
output_file.write("{\n")

for date in date_generated:
    permutation = [usable_permutations_list.pop(random.randrange(len(usable_permutations_list))) for _ in range(1)]
    dict[date.strftime("%Y-%m-%d")] = permutation[0]
    print({date.strftime("%Y-%m-%d"): permutation[0]})
    output_file.write('"' + date.strftime("%Y-%m-%d") + '":')
    if(date == date_generated[-1]):
        output_file.write('"' + permutation[0] + '"\n' )
    else:
        output_file.write('"' + permutation[0] + '",\n' )

output_file.write("}")
output_file.close()
