import sys, getopt

'''def main(argv):
    inputfile = 'test.txt'
    outputfile = 'test.json'
    try:
        opts, args = getopt.getopt(argv,"hi:o:",["ifile=","ofile="])
    except getopt.GetoptError as err:
        print(err)
        print('json.py -i <inputfile> -o <outputfile>')
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print('test.py -i <inputfile> -o <outputfile>')
            sys.exit()
        elif opt in ("-i", "--ifile"):
            inputfile = arg
        elif opt in ("-o", "--ofile"):
            outputfile = arg
        else:
            print('json.py -i <inputfile> -o <outputfile>')
            print('Defaults: test.txt, test.json')
    x = None
    with open(inputfile, 'r') as f:
        with open(outputfile, 'w') as o:
            o.write("[")
            lines = list(f)
            for i in range(len(lines) - 1):
                o.write(lines[i] + ",")
            o.write(lines[len(lines) - 1])
            o.write("]")
'''

#main(sys.argv)
inputfile = 'test.txt'
outputfile = 'test.txt'
if (len(sys.argv) > 1):
    inputfile = sys.argv[1]
    outputfile = sys.argv[2]
with open(inputfile, 'r') as f:
    with open(outputfile, 'w') as o:
        o.write("[")
        lines = list(f)
        for i in range(len(lines) - 1):
            o.write(lines[i] + ",")
        o.write(lines[len(lines) - 1])
        o.write("]")
