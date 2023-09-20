using BlazorMVCExample.Models;
using Microsoft.AspNetCore.Components;
using Palermo.BlazorMvc;
namespace BlazorMVCExample.Pages
{
    [Route("/user-profile")]
    public class UserProfileController : ControllerComponentBase<UserProfileView>
    {
        protected override void OnViewInitialized()
        {
            View.User = new UserModel
            {
                Name = "John Doe",
                Email = "johndoe123@gmail.com",
                Address = "123 Main St, New York, NY 10001",
                PhoneNumber = "555-555-5555"
            };
        }
    }
}