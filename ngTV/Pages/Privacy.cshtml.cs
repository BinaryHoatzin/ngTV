using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ngTV.Pages
{
    public class PrivacyModel : PageModel
    {
        private readonly ILogger<PrivacyModel> _logger;

        public PrivacyModel(ILogger<PrivacyModel> logger)
        {
            _logger = logger;
        }


        public class theCalculationClass{
        

        private int vari;
        public int Vari { get { return vari; } set { vari = value; } }

        public int theCalculationMethod(int aNumberGosHere) {

            Vari = aNumberGosHere;
                return vari;
        
        }

    }

        public void OnGet()
        {


        theCalculationClass testObjectHere = new theCalculationClass();

            int thisIsGoingToShowUpInTheView = testObjectHere.theCalculationMethod(3);
            ViewData["Test"] = thisIsGoingToShowUpInTheView;
        
        }
    }
}