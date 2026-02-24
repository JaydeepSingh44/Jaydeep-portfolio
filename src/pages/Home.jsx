import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css'

// 🖼️ Import Assets
import photo from '../../public/profile-pic.png'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'
import facebookLogo from '../../public/facebook.png'

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const photoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
}

const glowVariants = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(22, 163, 74, 0.3)",
      "0 0 60px rgba(22, 163, 74, 0.6)",
      "0 0 20px rgba(22, 163, 74, 0.3)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const tagHoverVariants = {
  rest: {
    scale: 1,
    background: "rgba(255, 255, 255, 0.05)",
    boxShadow: "0 0 0 rgba(22, 163, 74, 0)",
  },
  hover: {
    scale: 1.08,
    background: "linear-gradient(135deg, rgba(22, 163, 74, 0.2), rgba(22, 163, 74, 0.3))",
    boxShadow: "0 0 25px rgba(22, 163, 74, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
}

const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 0 10px rgba(22, 163, 74, 0.08)",
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0 15px 40px rgba(22, 163, 74, 0.2)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

const socialIconVariants = {
  rest: {
    scale: 1,
    rotate: 0,
    filter: "brightness(0.9) drop-shadow(0 0 0 transparent)",
  },
  hover: {
    scale: 1.25,
    rotate: [0, -10, 10, 0],
    filter: "brightness(1.2) drop-shadow(0 0 20px #16a34a)",
    transition: {
      rotate: {
        duration: 0.4,
        ease: "easeInOut",
      },
      scale: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  },
  tap: {
    scale: 0.9,
  },
}

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0)

  const professions = [
    "Full‑Stack MERN Developer",
    "Frontend Designer",
    "Backend API Builder",
    "DevOps Learner",
    "Tech Explorer",
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/JaydeepSingh44/', color: '#6e5494' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/jaydeep-singh-chouhan/', color: '#0077b5' },
    { img: gmailLogo, title: 'Email', link: 'mailto:jaydeep.chouhan.cse@gmail.com', color: '#ea4335' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+917566422958', color: '#25d366' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/jaydeepbanna44', color: '#e4405f' },
    
  ]

  // Rotating role text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % professions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section
      className="home-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.2,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0.2, 0.8, 0],
              scale: [null, Math.random() * 0.3 + 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo - REMOVED FLOATING ANIMATION */}
        <motion.div
          className="photo-container"
          variants={photoVariants}
        >
          {/* Rotating Ring */}
          <motion.div
            className="photo-ring"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Second Ring (opposite direction) */}
          <motion.div
            className="photo-ring-2"
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Photo Frame with Glow - NO FLOAT */}
          <motion.div
            className="photo-frame"
            variants={glowVariants}
            animate="animate"
          >
            {/* Removed floatVariants - static photo now */}
            <div className="photo-inner">
              <motion.img
                src={photo}
                alt="Jaydeep Singh Chouhan"
                className="profile-photo"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              />
            </div>
          </motion.div>

          {/* Orbiting Dots */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="orbit-dot"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
              style={{
                width: 320 + i * 40,
                height: 320 + i * 40,
              }}
            >
              <span className="dot" />
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Info Section */}
        <motion.div className="home-info" variants={containerVariants}>
          {/* Greeting */}
          <motion.p className="greeting" variants={itemVariants}>
            Welcome to my portfolio
          </motion.p>

          {/* Main Title */}
          <motion.h1 className="home-title" variants={itemVariants}>
            Hi, I'm{' '}
            <motion.span
              className="home-name"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Jaydeep Singh Chouhan
            </motion.span>
          </motion.h1>

          {/* Animated Role Text */}
          <motion.div className="role-container" variants={itemVariants}>
            <span className="role-prefix">I'm a </span>
            <motion.span
              key={currentRole}
              className="role-text"
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              {professions[currentRole]}
            </motion.span>
          </motion.div>

          {/* Profession Tags */}
          <motion.div className="profession-tags" variants={itemVariants}>
            {professions.map((role, i) => (
              <motion.div
                key={i}
                className="profession-tag"
                variants={tagHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                custom={i}
              >
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {role}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards" variants={containerVariants}>
            {[
              { icon: '📍', label: 'Location', value: 'Noida, Gurgaon, India' },
              { icon: '💼', label: 'Expertise', value: 'Full Stack, Problem Solving' },
              { icon: '📧', label: 'Contact', value: 'jaydeep.chouhan.cse@gmail.com' },
            ].map((info, i) => (
              <motion.div
                key={i}
                className="info-card"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="info-icon"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {info.icon}
                </motion.span>
                <div className="info-content">
                  <strong>{info.label}</strong>
                  <p>{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons with Sliding Color Effect */}
          <motion.div className="cta-buttons" variants={itemVariants}>
            <motion.a
              href="/projects"
              className="cta-btn primary"
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-text">View Projects</span>
              <span className="btn-arrow">→</span>
              <span className="btn-slide-bg"></span>
            </motion.a>
            
            <motion.a
              href="/contact"
              className="cta-btn secondary"
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-text">Get In Touch</span>
              <span className="btn-slide-bg"></span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div
        className="quick-links"
        variants={containerVariants}
      >
        <motion.h2
          className="quick-links-title"
          variants={itemVariants}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Connect with me
          </motion.span>
        </motion.h2>

        <motion.div className="quick-links-list" variants={containerVariants}>
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link-item"
              variants={socialIconVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              custom={i}
              style={{ '--icon-color': item.color }}
            >
              <motion.div
                className="quick-link-bg"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.img
                src={item.img}
                alt={item.title}
                className="quick-link-img"
              />
              <motion.span
                className="quick-link-tooltip"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                {item.title}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      
    </motion.section>
  )
}