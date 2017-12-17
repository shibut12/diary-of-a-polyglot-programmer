using System;

namespace charp_structs
{
    class Program
    {
        static void Main(string[] args)
        {
            var person = new Person("Shibu", 29);
            Console.WriteLine("Date of Birth is on or before: {0}", person.DateofBirth);
        }
    }

    public interface PersonOps
    {
        void SetDateOfBirth();
    }
    public struct Person : PersonOps
    {
        public string Name {get;set;}
        public int Age { get;set;}
        public DateTime DateofBirth {get;set;}

        public Person(string name, int age)
        {
            Name = name;
            Age = age;
            DateofBirth = DateTime.MinValue;

            SetDateOfBirth();
        }
        public void SetDateOfBirth()
        {
            if(this.Age > 0)
                this.DateofBirth = DateTime.Now.AddYears(-this.Age);
            else
                throw new ArgumentNullException("Age is not set yet");
        }
    }
    
}
