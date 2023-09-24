
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if(context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product 
                {
                    Name = "Rose",
                    Description = "Some description...",
                    Article = "ASD123",
                    Price = 20000,
                    PictureUrl = "/images/products/rose.png",
                    Color = "red",
                    Category = "flowers",
                    QuantityInStock = 100,
                },

                new Product 
                {
                    Name = "Carnation",
                    Description = "Some description...",
                    Article = "ASD321",
                    Price = 10000,
                    PictureUrl = "/images/products/carnation.png",
                    Color = "pink",
                    Category = "flowers",
                    QuantityInStock = 150,
                },

                new Product 
                {
                    Name = "Yellow Bouquet",
                    Description = "Some description...",
                    Article = "BSD123",
                    Price = 25000,
                    PictureUrl = "/images/products/yellow_bouquet.png",
                    Color = "yellow",
                    Category = "bouquets",
                    QuantityInStock = 20,
                },

                new Product 
                {
                    Name = "Pink Bouquet",
                    Description = "Some description...",
                    Article = "BSD126",
                    Price = 25000,
                    PictureUrl = "/images/products/pink_bouquet.png",
                    Color = "pink",
                    Category = "bouquets",
                    QuantityInStock = 15,
                },

                new Product 
                {
                    Name = "Hyacinth",
                    Description = "Some description...",
                    Article = "ADF445",
                    Price = 18000,
                    PictureUrl = "/images/products/hyacinth.png",
                    Color = "violet",
                    Category = "flowers",
                    QuantityInStock = 80,
                },

                new Product 
                {
                    Name = "Peony",
                    Description = "Some description...",
                    Article = "DDF564",
                    Price = 22000,
                    PictureUrl = "/images/products/peony_pink.png",
                    Color = "pink",
                    Category = "flowers",
                    QuantityInStock = 75,
                },

                new Product 
                {
                    Name = "Hydrangea",
                    Description = "Some description...",
                    Article = "GGH557",
                    Price = 23000,
                    PictureUrl = "/images/products/hydrangea.png",
                    Color = "white",
                    Category = "flowers",
                    QuantityInStock = 65,
                },

                new Product 
                {
                    Name = "Iris",
                    Description = "Some description...",
                    Article = "SSD453",
                    Price = 24000,
                    PictureUrl = "/images/products/iris.png",
                    Color = "violet",
                    Category = "flowers",
                    QuantityInStock = 45,
                },
            };
            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}