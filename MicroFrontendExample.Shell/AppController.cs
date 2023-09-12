using System;
using Microsoft.AspNetCore.Components.Rendering;
using Palermo.BlazorMvc;

namespace MicroFrontendExample.Shell
{
    public class AppController : ControllerComponentBase<AppView>
    {
        protected override void BuildRenderTree(RenderTreeBuilder builder)
        {
            base.BuildRenderTree(builder);
        }
    }
}

