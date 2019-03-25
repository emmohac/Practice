import pandas as pd
from matplotlib import pyplot as plt

sample_data = pd.read_csv("data_sample.csv")
bydate = sample_data.groupby(by="date",sort=False)

avg_hour = round(bydate.mean(),2)

graph = avg_hour.plot(legend=False,kind="bar",rot=45)
plt.title("Average Sleep Hour")
plt.ylabel("hour", rotation='horizontal')
graph.set_ylim(0,12)
plt.xlabel("")
plt.show()

