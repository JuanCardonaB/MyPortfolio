import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react"

interface ProjectCardProps {
    title: string;
    subtitle1: string;
    subtitle2: string;
}

export const ProjectCard = ({title, subtitle1, subtitle2 }: ProjectCardProps) => {
    return (
        <Card isFooterBlurred className="w-[250px] sm:w-[200px] sm:col-span-6 md:w-[300px] lg:col-span-4 h-[300px] col-span-12 ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">{title}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover hover:scale-150 transition-all duration-500"
                src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-tiny max-w-[200px]">{subtitle1}.</p>
                    <p className="text-black text-tiny max-w-[200px]">{subtitle2}.</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Notify Me
                </Button>
            </CardFooter>
        </Card>
    )
}