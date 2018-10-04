using Nancy;

namespace _001_simpleApp
{
    public class HomeModule:NancyModule
    {
        public HomeModule()
        {
            Get("/", args=> "Hello world from nancyFx");
        }
    }
}
