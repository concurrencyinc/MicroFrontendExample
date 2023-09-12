using MicroFrontendExample.Shell.Models;
using Microsoft.AspNetCore.Components;
using Palermo.BlazorMvc;

namespace MicroFrontendExample.Shell.Pages
{
    [Route("/user-profile")]
    public class UserProfileController : ControllerComponentBase<UserProfileView>
    {
        protected override void OnViewInitialized()
        {
            View.User = new UserModel
            {
                Name = "John Doe",
                Email = "johndoe123@gmail.com"
            };
        }
    }
}