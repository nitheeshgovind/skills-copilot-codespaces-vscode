function skillsMember() {
  var member = new Member();
  member.skills = ['JavaScript', 'HTML', 'CSS'];
  member.getSkills = function() {
    return this.skills;
  };
  return member;
}