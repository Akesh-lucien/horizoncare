import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/tabs";
import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import { Check } from "lucide-react";
import Image from "next/image";
import { pricingTabs } from "@/constants/data";

function MainServices() {
  return (
    <section className="bg-primary/10 py-8 md:py-12">
      <div className="container">
      <Heading
        accent="Save Over 25% When You Select Annual Billing"
        heading1="Our Main Services"
        center
      />

      <Tabs defaultValue="Monthly" className=" mt-8 md:mt-12">
        <TabsList className="grid w-full grid-cols-2 max-w-[300px] xs:max-w-md mx-auto gap-2">
          {pricingTabs.map((tab) => (
            <TabsTrigger
              key={tab.title}
              value={tab.title}
              className="rounded-full font-body px-4 py-2 xs:px-6 xs:py-3 text-sm xs:text-base transition-colors data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {tab.title} Plan
            </TabsTrigger>
          ))}
        </TabsList>
        {pricingTabs.map((tab) => (
          <TabsContent key={tab.title} value={tab.title}>
            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {tab.packages.map((pkg) => (
                <FadingSlide key={pkg.title} vertical>
                  <Card className="rounded-3xl p-4 md:p-6 bg-white">
                    <CardHeader>
                      <div className="mb-4">
                        <Image
                          src={pkg.img}
                          alt="benefits-1"
                          width={600}
                          height={400}
                          className="mx-auto rounded-2xl w-full h-48 md:h-56 lg:h-64 object-cover"
                        />
                      </div>
                      <CardDescription className="font-body text-hover/50 text-sm md:text-base">
                        {pkg.description}
                      </CardDescription>
                      <CardTitle className="font-heading font-semibold text-hover/80 text-3xl md:text-4xl">
                        {pkg.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl md:text-4xl font-heading font-extrabold">
                        ${pkg.price}
                        <span className="text-sm md:text-base font-medium text-muted-foreground ml-1">
                          {pkg.frequency}
                        </span>
                      </div>
                      <ul className="mt-4 md:mt-6 space-y-2 md:space-y-4">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check className="text-green-500 mr-2 h-4 w-4 md:h-5 md:w-5" />
                            <span className="text-xs md:text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="w-full md:w-[80%]">
                      <SharedButton renderText="start with this" />
                    </CardFooter>
                  </Card>
                </FadingSlide>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      </div>
    </section>
  );
}

export default MainServices;
