BIG_COUNTRY = 50
country_populations = dict()
country_populations["Ghana"] = 28
country_populations["Brazil"] = 209
country_populations["Mongolia"] = 3
country = "Brazil"
print(country, "is a big country") if country_populations[country] >= BIG_COUNTRY else print(
    country, "is a small country")
