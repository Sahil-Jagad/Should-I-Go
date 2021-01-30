import nltk
from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize 
  


def get_input():
    Y = input("How many days has it been since you last went out? Describe any possible symptom of being sick you may have been feeling recently.\n\n\n")
    #make all words lowercase
    Y = " ".join([word.lower() for word in Y.split()])
    return Y

# tokenization 
def tokenize_lists(X,Y):
    X_list = word_tokenize(X) 
    Y_list = word_tokenize(Y)
    return (X_list, Y_list)
    
# sw contains the list of stopwords 
sw = stopwords.words('english')
l1 =[]
l2 =[] 

def clean_sets(X_list, Y_list):
    # remove stop words from the string 
    X_set = {w for w in X_list if not w in sw}  
    Y_set = {w for w in Y_list if not w in sw}  
    return (X_set, Y_set)

def create_rvector(X_set, Y_set): 
    # form a set containing keywords of both strings
    return X_set.union(Y_set)

def vecor_creation(X_set, Y_set):

    rvector = create_rvector(X_set, Y_set)

    for w in rvector: 
        if w in X_set: 
            l1.append(1) # create a vector 
        else: 
            l1.append(0) 
        if w in Y_set: 
            l2.append(1) 
        else: 
            l2.append(0) 

    return rvector

def cosine_similarity(rvector):
    c = 0
    # cosine formula  
    for i in range(len(rvector)): 
            c+= l1[i]*l2[i] 
    cosine = c / float((sum(l1)*sum(l2))**0.5) 
    return cosine
#print("similarity: ", cosine) 

def run():
    X = """ mild symptoms to severe illness 2 14 symptoms fever chills cough shortness of breath difficulty breathing fatigue muscle body aches headache 
    loss of taste loss of smell sore throat congestion runny nose nausea vomiting diarrhea"""
    Y = get_input()
    X_list, YList = tokenize_lists(X,Y)
    stop_words, l1, l2 = stopwords.words('english'), [], []
    X_set, Y_Set =  clean_sets(X_list, YList)
    rvector = vecor_creation(X_set, Y_Set)
    similarity = cosine_similarity(rvector)
    print()
    print(similarity)

if __name__ == "__main__":
    run()