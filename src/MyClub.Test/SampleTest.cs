using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;


namespace MyClub.Test
{
    [TestFixture]
    public class SampleTest
    {
       [Test]
        public void PassingTest()
        {
            Assert.AreEqual(4, Add(2, 2));
        }

        [Test]
        public void FailingTest()
        {
            Assert.AreEqual(5, Add(2, 2));
        }

        int Add(int x, int y)
        {
            return x + y;
        }
    }
}
