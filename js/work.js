var hsl = {
	header : "<h4> Student Systems Linux Administrator </h4> <h5> Health Sciences Library, University of Washington </h5> <h5> June 2015 - Present </h5>",
	duties: "<ul> <li> Set up and monitor servers using Nagios </li> <li> Install multiple physical and virtual operating systems such as Centos, RHEL, and Windows </li> <li> Change and deliver backup tapes on a daily basis </li> <li> Perform various tasks and work on assigned projects </li> </ul>",
	skills: "<ul> <li> Web Development 								<ul>									<li> LAMP (Linux, Apache, MySQL, PHP) </li>									<li> WordPress </li>								</ul>							</li>							<li> Virtualization 								<ul> 									<li> VirtualBox </li>									<li> KVM </li>									<li> Xen </li>								</ul>							</li>							<li> Network Monitoring 								<ul>									<li> Nagios </li>								</ul>							</li>							<li> Other 								<ul>									<li> Command Line </li>									<li> GIMP </li>								</ul>							</li>						</ul>",
	projects: "<dl> 							<dt> PNR Website </dt>							<dd> Responsive website for the National Network of Libraries of Medicine, Pacific Northwest Region. Based on the PNR blog, <a href='http://nnlm.gov/pnr/dragonfly/' target='_blank'> Dragonfly </a>, and developed using Wordpress. </dd>						</dl>",
    img: "img/pnr_mobile2.jpg",
    imgBox: "<img src='img/pnr_mobile2.jpg' class='display'/>"
};

var access = {
	header : "<h4> Undergraduate Student Researcher </h4> <h5> Mobile Accessibility Lab, University of Washington </h5> <h5> May 2015 - Present </h5>",
	duties: "<ul> <li> Research existing video search engines for ideas in usability and visual appeal </li> <li> Study latent semantic analysis (LSA) for the search algorithm </li> <li> Write code for 'ASL Search' </li> </ul>",
	skills: "<ul><li> Web Development 								<ul>									<li> HTML </li>									<li> CSS </li>									<li> JavaScript </li>									<li> jQuery </li>									<li> Python </li>									<li> Bootstrap </li>								</ul>							</li>						</ul>",
	projects: "<dl> 							<dt> ASL Search </dt>							<dd> Search engine for signs in American Sign Language. Instead of typing words into a search box, features are selected in a form. </dd>						</dl>",
    img: "img/asl_results.png",
    imgBox: "<img src='img/asl_results.png' class='display'/>"
};

var hri = {
	header : "<h4> Undergraduate Student Researcher </h4> <h5> Human Robot Interaction Lab, University of Washington </h5> <h5> January 2015 - April 2015 </h5>",
	duties: "<ul> <li> Storyboarded interactions between robot and users </li> <li> Simulated human-like characteristics in robot eyes and movements for various situations </li> <li> Developed English lesson plan to be taught by 'Kubi' </li> </ul>",
	skills: "<ul>							<li> Application 								<ul>									<li> Android Studio </li>									<li> Java </li>								</ul>							</li>							<li> Other 								<ul>									<li> PowerPoint </li>									<li> Excel </li>								</ul>							</li>						</ul>",
	projects: "<dl> 							<dt> Kubi </dt>							<dd> Robot tablet application to aid in English education in developing countries. Based on DuoLingo with an elementary school age group as the audience. </dd>						</dl>",
    img: "img/kubi_storyboard.png",
    imgBox: "<img src='img/kubi_storyboard.png' class='display'/> <img src='img/kubi_robot.png' class='display' data-toggle='modal' data-target='#myModal4'/>"
};

$(document).ready(function() {
	$('.portfolio-item').click(function(){
		var id = this.id;
		console.log(id)
		$('#work-header').html(window[id].header);
		$('#duties').html(window[id].duties);
		$('#skills').html(window[id].skills);
		$('#projects').html(window[id].projects);
        //$('#project-img').attr("src", window[id].img);
        $('#projects-img').html(window[id].imgBox);
	});
	$('#hsl').trigger("click");
});
