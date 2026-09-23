import { Section } from '../Section/Section';
import { SkillTags } from '../SkillTags/SkillTags';
import { SOFT_SKILLS } from '../../data/resumeData';

export const SoftSkills = () => {
  return (
    <Section id="soft-skills" title="Soft Skills">
      <SkillTags skills={SOFT_SKILLS} variant="soft" />
    </Section>
  );
};
