using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
                    PictureUrl = "/images/products/rose",
                    Price = 20000,
                    Color = "red",
                    Category = "flowers",
                    QuantityInStock = 100,
                },

                new Product 
                {
                    Name = "Carnation",
                    Description = "Some description...",
                    Article = "ASD321",
                    PictureUrl = "/images/products/carnation",
                    Price = 10000,
                    Color = "pink",
                    Category = "flowers",
                    QuantityInStock = 150,
                },

                new Product 
                {
                    Name = "Yellow Bouquet",
                    Description = "Some description...",
                    Article = "BSD123",
                    PictureUrl = "/images/products/yellow_bouquet",
                    Price = 25000,
                    Color = "yellow",
                    Category = "bouquets",
                    QuantityInStock = 20,
                },

                new Product 
                {
                    Name = "Pink Bouquet",
                    Description = "Some description...",
                    Article = "BSD126",
                    PictureUrl = "/images/products/pink_bouquet",
                    Price = 25000,
                    Color = "pink",
                    Category = "bouquets",
                    QuantityInStock = 15,
                },

                new Product 
                {
                    Name = "Hyacinth",
                    Description = "Some description...",
                    Article = "ADF445",
                    PictureUrl = "/images/products/hyacinth",
                    Price = 18000,
                    Color = "violet",
                    Category = "flowers",
                    QuantityInStock = 80,
                },

                new Product 
                {
                    Name = "Peony",
                    Description = "Some description...",
                    Article = "DDF564",
                    PictureUrl = "/images/products/peony_pink",
                    Price = 22000,
                    Color = "pink",
                    Category = "flowers",
                    QuantityInStock = 75,
                },

                new Product 
                {
                    Name = "Hydrangea",
                    Description = "Some description...",
                    Article = "GGH557",
                    PictureUrl = "/images/products/hydrangea",
                    Price = 23000,
                    Color = "white",
                    Category = "flowers",
                    QuantityInStock = 65,
                },

                new Product 
                {
                    Name = "Iris",
                    Description = "Some description...",
                    Article = "SSD453",
                    PictureUrl = "/images/products/iris",
                    Price = 24000,
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