import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="container-page mx-auto max-w-3xl py-10 text-center md:py-16">
        {eyebrow && (
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            {eyebrow}
          </p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-balance text-4xl font-bold text-foreground md:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-balance text-base text-muted-foreground md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}