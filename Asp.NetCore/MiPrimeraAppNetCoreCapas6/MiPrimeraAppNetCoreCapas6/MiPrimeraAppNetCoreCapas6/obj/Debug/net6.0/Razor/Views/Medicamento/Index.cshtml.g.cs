#pragma checksum "C:\Users\elifi\Desktop\MiPrimeraAppNetCoreCapas6\MiPrimeraAppNetCoreCapas6\MiPrimeraAppNetCoreCapas6\Views\Medicamento\Index.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "fbc798ceefb397498becd854f12a0c44f629d5ae598f14d14df22f524ce6df80"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Medicamento_Index), @"mvc.1.0.view", @"/Views/Medicamento/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\elifi\Desktop\MiPrimeraAppNetCoreCapas6\MiPrimeraAppNetCoreCapas6\MiPrimeraAppNetCoreCapas6\Views\_ViewImports.cshtml"
using MiPrimeraAppNetCoreCapas6;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\elifi\Desktop\MiPrimeraAppNetCoreCapas6\MiPrimeraAppNetCoreCapas6\MiPrimeraAppNetCoreCapas6\Views\_ViewImports.cshtml"
using MiPrimeraAppNetCoreCapas6.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"fbc798ceefb397498becd854f12a0c44f629d5ae598f14d14df22f524ce6df80", @"/Views/Medicamento/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"9f392eacb6b2803261c94a154c85715367fca56636e9360ada52c2a5e6f1a497", @"/Views/_ViewImports.cshtml")]
    public class Views_Medicamento_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/sweetalert.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/bootstrap.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/generic.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/medicamento.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "C:\Users\elifi\Desktop\MiPrimeraAppNetCoreCapas6\MiPrimeraAppNetCoreCapas6\MiPrimeraAppNetCoreCapas6\Views\Medicamento\Index.cshtml"
  
    ViewData["Title"] = "Index";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Medicamentos</h1>\r\n");
            WriteLiteral(@"<!--
<fieldset>

    <legend>Busqueda Medicamento</legend>

    <form id=""frmBusquedaMedicamento"" method=""post"" class=""mb-3"">

       <div class=""row"">

           <div class=""col-md-6"">
               <label>Id medicamento</label>
               <input type=""number"" class=""form-control"" name=""iidmedicamento"" />
           </div>

            <div class=""col-md-6"">
                <label>Nombre medicamento</label>
               <input type=""text"" class=""form-control"" name=""nombremedicamento""  />
           </div>

       </div>

        <div class=""row"">

           <div class=""col-md-6"">
               <label>Nombre Laboratorio</label>
              <select class=""form-control"" id=""cboLaboratorioBusqueda"" name=""iidlaboratorio""  >
");
            WriteLiteral("              </select>\r\n           </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <label>Nombre Tipo Medicamento</label>\r\n                 <select id=\"cboTipoMedicamentoBusqueda\" class=\"form-control\" name=\"iidtipomedicamento\">\r\n");
            WriteLiteral(@"
                 </select>
           </div>

       </div>

    </form>
    <button class=""btn btn-primary"" onclick=""BuscarDatos()"">Buscar</button>
    <button class=""btn btn-danger"" onclick=""LimpiarMedicamento()"" >Limpiar</button>

    </fieldset>
            -->

<div id=""divContenedor"">

</div>

<!-- Modal -->
<!--<div class=""modal fade"" id=""staticBackdrop"" data-bs-backdrop=""static"" data-bs-keyboard=""false"" tabindex=""-1"" aria-labelledby=""staticBackdropLabel"" aria-hidden=""true"">
    <div class=""modal-dialog modal-xl"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""lbltitulo""></h5>
                <button type=""button"" class=""btn-close"" data-bs-dismiss=""modal"" aria-label=""Close""></button>
            </div>
            <div class=""modal-body"">

                <form id=""frmGuardarMedicamento"" method=""post"" class=""mb-3"">

                    <div class=""row"">
                        <div class=""col-md-6"">
");
            WriteLiteral(@"                            <label>Id Medicamento</label>
                            <input type=""text"" class=""form-control"" readonly name=""iidmedicamento"" />
                        </div>
                        <div class=""col-md-6"">
                            <label>Codigo Medicamento</label>
                            <input type=""text"" class=""form-control sn ob max-100"" name=""codigoMedicamento"" />
                        </div>



                    </div>

                    <div class=""row"">
                        <div class=""col-md-6"">
                            <label>Nombre Medicamento</label>
                            <input type=""text"" class=""form-control snslcenb ob"" name=""nombremedicamento"" />
                        </div>
                        <div class=""col-md-6"">
                            <label>Laboratorio</label>
                            <select id=""cboLaboratorioGuardar"" name=""iidlaboratorio"" class=""form-control ob""></select>
                        <");
            WriteLiteral(@"/div>



                    </div>

                    <div class=""row"">
                        <div class=""col-md-6"">
                            <label>Tipo Medicamento</label>
                            <select id=""cboTipoMedicamentoGuardar"" name=""iidtipomedicamento"" class=""form-control ob""></select>
                        </div>
                        <div class=""col-md-6"">
                            <label>Uso Medicamento</label>
                            <input type=""text"" class=""form-control slcenb"" name=""usomedicamento"" />
                        </div>



                    </div>

                    <div class=""row"">
                        <div class=""col-md-12"">
                            <label>Contenido</label>
                            <input type=""text"" class=""form-control snslcenb"" name=""contenido"" />
                        </div>




                    </div>



                </form>
            </div>
            <div class=""modal-footer""");
            WriteLiteral(@">
                <button type=""button"" class=""btn btn-secondary"" id=""btnCerrarModal"" data-bs-dismiss=""modal"">Cerrar</button>
                <button type=""button"" class=""btn btn-primary"" onclick=""GuardarDatos()"">Guardar</button>
            </div>
        </div>
    </div>
</div>-->
");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "fbc798ceefb397498becd854f12a0c44f629d5ae598f14d14df22f524ce6df809851", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "fbc798ceefb397498becd854f12a0c44f629d5ae598f14d14df22f524ce6df8010914", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "fbc798ceefb397498becd854f12a0c44f629d5ae598f14d14df22f524ce6df8011978", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "fbc798ceefb397498becd854f12a0c44f629d5ae598f14d14df22f524ce6df8013042", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
