using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NUnitLite;

namespace ConsoleApp1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("ok");
            new AutoRun().Execute(args);
            Console.ReadLine();
        }
    }
}
