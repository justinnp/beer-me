import bs4 as bs
from urllib.request import Request, urlopen


kind = input("Enter a beer type [sour, ipa, ale..]: ")

url = 'https://www.beeradvocate.com/search/?q='
url = url + kind

# grab the sauce bois, and read it
sauce = Request(url, headers={'User-Agent': 'Mozilla/5.0'})

# pass the HTML code to BeautifulSoup
req = urlopen(sauce).read()
soup = bs.BeautifulSoup(req, 'lxml')

# find all beers on page in <b></b> tag
elements = soup.find_all('b')
del elements[:4]
beers = []

for i in range(0, len(elements)):
    string = str(elements[i])
    string = string[3:]
    string = string[:-4]
    beers.append(string)
    print(string)
