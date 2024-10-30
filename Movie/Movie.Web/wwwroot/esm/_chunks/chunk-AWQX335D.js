import{a as T}from"./chunk-QEONDOH5.js";import{c as o,e as Ge,f as r,g as w,h as I,i as A,j as i}from"./chunk-7V7WNOD5.js";var fe=Ge((jt,Re)=>{Re.exports=Serenity.Extensions});var U=r(i(),1);var G=class G extends U.ColumnsBase{};o(G,"GenreColumns"),G.columnsKey="MovieDB.Genre",G.Fields=(0,U.fieldsProxy)();var V=G;var L=r(i(),1);var c=class c{static getLookup(){return(0,L.getLookup)("MovieDB.Genre")}static async getLookupAsync(){return(0,L.getLookupAsync)("MovieDB.Genre")}};o(c,"GenreRow"),c.idProperty="GenreId",c.nameProperty="Name",c.localTextPrefix="MovieDB.Genre",c.lookupKey="MovieDB.Genre",c.deletePermission="Administration:General",c.insertPermission="Administration:General",c.readPermission="Administration:General",c.updatePermission="Administration:General",c.Fields=(0,L.fieldsProxy)();var N=c;var Z=r(i(),1),X;(e=>(e.baseUrl="MovieDB/Genre",e.Methods={Create:"MovieDB/Genre/Create",Update:"MovieDB/Genre/Update",Delete:"MovieDB/Genre/Delete",Retrieve:"MovieDB/Genre/Retrieve",List:"MovieDB/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,n,m){return(0,Z.serviceRequest)(e.baseUrl+"/"+t,s,n,m)}})))(X||(X={}));var K=r(i(),1);var _=r(i(),1);var k,E,$,J;$=[_.Decorators.registerFormatter("MovieTutorial.GenreListFormatter")];var S=class S{format(a){let e=a.value;if(!e||!e.length)return"";let t=k==null?void 0:k.itemById;return t?e.map(s=>{var n=t[s];return a.escape(n==null?s:n.Name)}).join(", "):(E!=null||(E=N.getLookupAsync().then(s=>{var n;k=s;try{(n=a.grid)==null||n.invalidate()}finally{k=null,E=null}}).catch(()=>E=null)),'<i class="fa fa-spinner"></i>')}};J=w(null),S=A(J,0,"GenreListFormatter",$,S),o(S,"GenreListFormatter"),I(J,1,S);var F=S;var ee=r(i(),1),q=(t=>(t[t.Film=1]="Film",t[t.TvSeries=2]="TvSeries",t[t.MiniSeries=3]="MiniSeries",t))(q||{});ee.Decorators.registerEnumType(q,"Movie.Modules.MovieDB.Movie.MovieKind","MovieDB.MovieKind");var h=class h extends K.ColumnsBase{};o(h,"MovieColumns"),h.columnsKey="MovieDB.Movie",h.Fields=(0,K.fieldsProxy)();var te=h;queueMicrotask(()=>[q,F]);var re=r(i(),1);var u=class u{};o(u,"MovieRow"),u.idProperty="MovieId",u.nameProperty="Title",u.localTextPrefix="MovieDB.Movie",u.deletePermission="Administration:General",u.insertPermission="Administration:General",u.readPermission="Administration:General",u.updatePermission="Administration:General",u.Fields=(0,re.fieldsProxy)();var oe=u;var se=r(i(),1),ie;(e=>(e.baseUrl="MovieDB/Movie",e.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,n,m){return(0,se.serviceRequest)(e.baseUrl+"/"+t,s,n,m)}})))(ie||(ie={}));var H=r(i(),1);var O=class O extends H.ColumnsBase{};o(O,"PersonColumns"),O.columnsKey="MovieDB.Person",O.Fields=(0,H.fieldsProxy)();var ne=O;queueMicrotask(()=>[T]);var C=r(i(),1);var l=class l{static getLookup(){return(0,C.getLookup)("MovieDB.Person")}static async getLookupAsync(){return(0,C.getLookupAsync)("MovieDB.Person")}};o(l,"PersonRow"),l.idProperty="PersonId",l.nameProperty="FullName",l.localTextPrefix="MovieDB.Person",l.lookupKey="MovieDB.Person",l.deletePermission="Administration:General",l.insertPermission="Administration:General",l.readPermission="Administration:General",l.updatePermission="Administration:General",l.Fields=(0,C.fieldsProxy)();var ae=l;var ce=r(i(),1),pe;(e=>(e.baseUrl="MovieDB/Person",e.Methods={Create:"MovieDB/Person/Create",Update:"MovieDB/Person/Update",Delete:"MovieDB/Person/Delete",Retrieve:"MovieDB/Person/Retrieve",List:"MovieDB/Person/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,n,m){return(0,ce.serviceRequest)(e.baseUrl+"/"+t,s,n,m)}})))(pe||(pe={}));var B=r(i(),1);var x=class x extends B.PrefixedContext{constructor(a){if(super(a),!x.init){x.init=!0;var e=B.StringEditor;(0,B.initFormType)(x,["Name",e])}}};o(x,"GenreForm"),x.formKey="MovieDB.Genre";var le=x;var W=r(i(),1);var b=class b extends W.ColumnsBase{};o(b,"MovieCastColumns"),b.columnsKey="MovieDB.MovieCast",b.Fields=(0,W.fieldsProxy)();var Y=b;var R=r(i(),1);var D=class D extends R.PrefixedContext{constructor(a){if(super(a),!D.init){D.init=!0;var e=R.ServiceLookupEditor,t=R.LookupEditor,s=R.StringEditor;(0,R.initFormType)(D,["MovieId",e,"PersonId",t,"Character",s])}}};o(D,"MovieCastForm"),D.formKey="MovieDB.MovieCast";var de=D;var me=r(i(),1);var v=class v{};o(v,"MovieCastRow"),v.idProperty="MovieCastId",v.nameProperty="Character",v.localTextPrefix="MovieDB.MovieCast",v.deletePermission="Administration:General",v.insertPermission="Administration:General",v.readPermission="Administration:General",v.updatePermission="Administration:General",v.Fields=(0,me.fieldsProxy)();var j=v;var ve=r(i(),1),ue;(e=>(e.baseUrl="MovieDB/MovieCast",e.Methods={Create:"MovieDB/MovieCast/Create",Update:"MovieDB/MovieCast/Update",Delete:"MovieDB/MovieCast/Delete",Retrieve:"MovieDB/MovieCast/Retrieve",List:"MovieDB/MovieCast/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,n,m){return(0,ve.serviceRequest)(e.baseUrl+"/"+t,s,n,m)}})))(ue||(ue={}));var p=r(i(),1);var xe=r(i(),1),De=r(fe(),1);var ye,Q,ke;ye=[xe.Decorators.registerEditor("Movie.MovieDB.MovieCastEditor")];var g=class g extends(ke=De.GridEditorBase){getColumnsKey(){return Y.columnsKey}getLocalTextPrefix(){return j.localTextPrefix}constructor(a){super(a)}};Q=w(ke),g=A(Q,0,"MovieCastEditor",ye,g),o(g,"MovieCastEditor"),I(Q,1,g);var z=g;var P=class P extends p.PrefixedContext{constructor(a){if(super(a),!P.init){P.init=!0;var e=p.StringEditor,t=p.TextAreaEditor,s=z,n=p.IntegerEditor,m=p.DateEditor,Be=p.EnumEditor,ge=p.LookupEditor;(0,p.initFormType)(P,["Title",e,"Description",t,"CastList",s,"Storyline",t,"Year",n,"ReleaseDate",m,"Runtime",n,"Kind",Be,"GenreList",ge])}}};o(P,"MovieForm"),P.formKey="MovieDB.Movie";var Pe=P;queueMicrotask(()=>[q]);var Le=r(i(),1);var f=class f{};o(f,"MovieGenresRow"),f.idProperty="MovieGenreId",f.localTextPrefix="MovieDB.MovieGenres",f.deletePermission="Administration:General",f.insertPermission="Administration:General",f.readPermission="Administration:General",f.updatePermission="Administration:General",f.Fields=(0,Le.fieldsProxy)();var Me=f;var qe=r(i(),1),Se;(e=>(e.baseUrl="MovieDB/MovieGenres",e.Methods={Create:"MovieDB/MovieGenres/Create",Update:"MovieDB/MovieGenres/Update",Delete:"MovieDB/MovieGenres/Delete",Retrieve:"MovieDB/MovieGenres/Retrieve",List:"MovieDB/MovieGenres/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,n,m){return(0,qe.serviceRequest)(e.baseUrl+"/"+t,s,n,m)}})))(Se||(Se={}));var d=r(i(),1);var M=class M extends d.PrefixedContext{constructor(a){if(super(a),!M.init){M.init=!0;var e=d.StringEditor,t=d.DateEditor,s=d.EnumEditor,n=d.IntegerEditor;(0,d.initFormType)(M,["FirstName",e,"LastName",e,"BirthDate",t,"BirthPlace",e,"Gender",s,"Height",n])}}};o(M,"PersonForm"),M.formKey="MovieDB.Person";var Ce=M;queueMicrotask(()=>[T]);export{V as a,le as b,N as c,X as d,te as e,Pe as f,oe as g,ie as h,ne as i,Ce as j,ae as k,pe as l};
//# sourceMappingURL=chunk-AWQX335D.js.map
