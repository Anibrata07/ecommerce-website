import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Electronics",
    image: "/electronics-gadgets.png",
    count: "1,234 items",
  },
  {
    name: "Fashion",
    image: "/fashion-category-with-clothing.png",
    count: "2,567 items",
  },
  {
    name: "Home & Garden",
    image: "/home-and-garden.png",
    count: "890 items",
  },
  {
    name: "Sports",
    image: "/sports-category-with-equipment.png",
    count: "456 items",
  },
]

export function Categories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-foreground mb-1">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.count}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
