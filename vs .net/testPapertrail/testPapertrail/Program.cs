using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using log4net;
using log4net.Config;


namespace testPapertrail
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));
        static void Main(string[] args)
        {
           
            // testPapertrail <config file> <type> <message>
            if (args.Length == 3)
            {
                XmlConfigurator.Configure(new System.IO.FileInfo(args[0]));
                String type = args[1];
                String message = args[2];

                switch (type)
                {
                    case "debug":
                        log.Debug(message);
                        break;
                    case "error":
                        log.Error(message);
                        break;
                    case "fatal":
                        log.Fatal(message);
                        break;
                    case "warn":
                        log.Warn(message);
                        break;
                    case "info":
                        log.Info(message);
                        break;

                }

            }
            else
            {
                Console.WriteLine("\n Papertrail exporter.");
                Console.WriteLine(" Usage: testPapertrail <config file> <type> <message> \n");
                Console.WriteLine("\n type: debug/error/fatal/info/warn");
            }

        }
    }
}
